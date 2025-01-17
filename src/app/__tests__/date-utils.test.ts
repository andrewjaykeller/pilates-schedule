describe('date comparison', () => {
    // Mock current date to a fixed time
    const mockDate = new Date('2025-01-19T12:00:00');

    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(mockDate);
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test('identifies future events correctly', () => {
        const eventDate = new Date('2025-01-20T20:30:00');
        expect(eventDate > mockDate).toBe(true);
    });

    test('identifies past events correctly', () => {
        const eventDate = new Date('2025-01-18T20:30:00');
        expect(eventDate > mockDate).toBe(false);
    });

    test('handles same day events correctly', () => {
        const eventDateLater = new Date('2025-01-19T14:00:00');
        const eventDateEarlier = new Date('2025-01-19T10:00:00');

        expect(eventDateLater > mockDate).toBe(true);
        expect(eventDateEarlier > mockDate).toBe(false);
    });
}); 