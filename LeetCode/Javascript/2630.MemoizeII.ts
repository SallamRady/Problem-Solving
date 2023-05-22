type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const idxMapper: Map<string, number> = new Map();
    const history: Map<string, any> = new Map();

    const getIdx = (obj: any): number => {
        if (!idxMapper.has(obj)) {
            idxMapper.set(obj, idxMapper.size);
        }
        return idxMapper.get(obj)!;
    };

    return function (...params: any) {
        const key = params.map(getIdx).join(',');
        if (!history.has(key)) {
            history.set(key, fn(...params));
        }
        return history.get(key)!;
    };
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */