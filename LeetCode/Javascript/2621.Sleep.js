/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise(cb => setTimeout(cb, millis));
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
