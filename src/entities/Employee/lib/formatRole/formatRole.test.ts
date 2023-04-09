import { formatRole } from './formatRole';

describe('formatRole.test', () => {
    test('should return string role', () => {
        expect(formatRole('cook')).toEqual('Повар');
    });

    // Рассматривать кейс без аргумента не стал,
    // TS не даст вызвать функцию с каким то другим аргументом,
    // кроме как тому что соответствует роли,
    // возможно стоит все таки добавить в функцию обработку таких случаев
});
