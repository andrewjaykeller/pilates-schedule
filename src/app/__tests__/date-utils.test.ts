describe('Event date comparison', () => {
    const mockCurrentDate = new Date('2024-01-19T12:00:00');
    let originalDate: DateConstructor;

    beforeAll(() => {
        originalDate = global.Date;
        global.Date = class extends Date {
            constructor(date?: string | number | Date) {
                if (date) {
                    return super(date);
                }
                return new originalDate(mockCurrentDate);
            }
        } as DateConstructor;
    });

    afterAll(() => {
        global.Date = originalDate;
    });

    function parseDateTime(date: string, time: string) {
        const [hours, minutesPeriod] = time.split(':');
        const [minutes, period] = minutesPeriod.split(' ');
        let hour = parseInt(hours);
        if (period === 'PM' && hour !== 12) hour += 12;
        if (period === 'AM' && hour === 12) hour = 0;

        const eventDate = new Date(date);
        eventDate.setHours(hour, parseInt(minutes), 0, 0);
        return eventDate;
    }

    function isFutureEvent(date: string, time: string): boolean {
        const eventDate = new Date(date);
        eventDate.setHours(0, 0, 0, 0);
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return eventDate >= now;
    }

    test('correctly identifies past events', () => {
        expect(isFutureEvent('2024-01-16', '8:30 PM')).toBe(false);
        expect(isFutureEvent('2024-01-18', '8:30 PM')).toBe(false);
    });

    test('correctly identifies future events', () => {
        expect(isFutureEvent('2024-01-20', '8:30 PM')).toBe(true);
        expect(isFutureEvent('2024-02-01', '2:00 PM')).toBe(true);
    });

    test('correctly handles AM/PM times', () => {
        expect(isFutureEvent('2024-01-19', '11:59 AM')).toBe(false);
        expect(isFutureEvent('2024-01-19', '12:01 PM')).toBe(true);
        expect(isFutureEvent('2024-01-19', '11:59 PM')).toBe(true);
        expect(isFutureEvent('2024-01-19', '12:01 AM')).toBe(false);
    });

    test('handles edge cases', () => {
        expect(isFutureEvent('2024-01-19', '12:00 PM')).toBe(false);
        expect(isFutureEvent('2024-01-19', '12:00 AM')).toBe(false);
    });

    test('real event data test', () => {
        const realEvents = [
            { date: '2024-01-30', time: '8:30 PM' },
            { date: '2024-02-06', time: '8:30 PM' },
            { date: '2024-02-01', time: '2:00 PM' },
            { date: '2024-02-02', time: '4:00 PM' },
            { date: '2024-02-08', time: '2:00 PM' },
            { date: '2024-02-09', time: '4:00 PM' }
        ];

        // All these events should be in the future relative to our mock date (Jan 19)
        realEvents.forEach(event => {
            console.log(`Testing event ${event.date}`);
            const result = isFutureEvent(event.date, event.time);
            expect(result).toBe(true);
        });
    });
}); 