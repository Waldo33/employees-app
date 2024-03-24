/**
 * Объект с условными классами Mods
 * @memberof classNames
 * @alias classNames
 */
export type Mods = Record<string, boolean | string | undefined>

/**
 * @category shared
 * @function classNames
 * @param {string} cls - main class
 * @param {Record<string, boolean | string | undefined>} mods - statement classes
 * @param {Array<string|undefined>} additional - additional classes
 * @returns Итоговая строка класса
 * @example
 * classNames('class1', mods: { active: true, disable: false }, ['class2']) // 'class1 active class2'
 */
export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods).filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
