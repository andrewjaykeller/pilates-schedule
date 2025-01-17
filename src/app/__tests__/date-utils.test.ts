describe('Event date comparison', () => {
    const mockCurrentDate = new Date('2024-01-19T12:00:00');
    let originalDate: DateConstructor;

    beforeAll(() => {
        originalDate = global.Date;
        global.Date = class extends Date {
            constructor(date?: string | number | Date) {
                if (date) {
                    super(date);
                } else {
                    super(mockCurrentDate);
                }
            }
        } as DateConstructor;
    });

    afterAll(() => {
        global.Date = originalDate;
    });

    function isFutureEvent(date: string): boolean {
        const eventDate = new Date(date);
        eventDate.setHours(0, 0, 0, 0);
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        return eventDate >= now;
    }

    test('correctly identifies past events', () => {
        expect(isFutureEvent('2024-01-16')).toBe(false);
        expect(isFutureEvent('2024-01-18')).toBe(false);
    });

    test('correctly identifies future events', () => {
        expect(isFutureEvent('2024-01-20')).toBe(true);
        expect(isFutureEvent('2024-02-01')).toBe(true);
    });

    test('correctly handles same day', () => {
        expect(isFutureEvent('2024-01-19')).toBe(false);
    });

    test('real event data test', () => {
        const realEvents = [
            { date: '2024-01-30' },
            { date: '2024-02-06' },
            { date: '2024-02-01' },
            { date: '2024-02-02' },
            { date: '2024-02-08' },
            { date: '2024-02-09' }
        ];

        realEvents.forEach(event => {
            console.log(`Testing event ${event.date}`);
            const result = isFutureEvent(event.date);
            expect(result).toBe(true);
        });
    });
}); 