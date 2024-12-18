class TreasureMap {
    // 生成一个随机的成功或失败结果，用于多个步骤中相似的判断逻辑
    static _generateRandomResult(successMessage, failureMessage) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random < 0.5) {
                    console.log(failureMessage); // 记录失败信息到控制台（可用于调试）
                    reject(failureMessage);
                } else {
                    console.log(successMessage); // 记录成功信息到控制台（可用于调试）
                    resolve(successMessage);
                }
            }, 2000);
        });
    }

    static getInitialClue() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("正在获取初始线索..."); // 记录获取初始线索的操作
                resolve("在古老的图书馆里找到了第一个线索...");
            }, 1000);
        });
    }

    static decodeAncientScript(clue) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!clue) {
                    console.error("没有线索可以解码!"); // 记录错误信息到控制台（错误情况）
                    reject("没有线索可以解码!");
                }
                console.log("正在解码线索:", clue); // 记录解码操作及线索内容
                resolve("解码成功!宝藏在一座古老的神庙中...");
            }, 1500);
        });
    }

    static solvePuzzle() {
        const successMessage = "解谜成功!你找到了通往神庙的钥匙...";
        const failureMessage = "糟糕!解谜失败...";
        return this._generateRandomResult(successMessage, failureMessage);
    }

    static searchTemple(location) {
        if (!location) {
            return new Promise((_, reject) => {
                console.error("没有提供有效的神庙位置，无法搜索神庙!");
                reject("没有提供有效的神庙位置，无法搜索神庙!");
            });
        }
        const successMessage = "找到了一个神秘的箱子...";
        const failureMessage = "糟糕!遇到了神庙守卫!";
        return this._generateRandomResult(successMessage, failureMessage);
    }

    static openTreasureBox() {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("正在打开宝藏箱...");
                resolve("恭喜!你找到了传说中的宝藏!");
            }, 1000);
        });
    }
}