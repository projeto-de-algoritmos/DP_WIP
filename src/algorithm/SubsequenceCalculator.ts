import { AnswerType } from "./AnswerType";

export class SubsequenceCalculator {

    generateRandomArraySequence(): number[] {
        let randomList = [];
        const randomListSize = Math.floor(Math.random() * 10) + 1;
        for (let i = 0; i < randomListSize; i++) {
            const randomValue = Math.floor(Math.random() * 100);
            randomList.push(randomValue);
        }
        return randomList;
    }

    generateRandomSubsequenceSize(): number {
        return Math.floor(Math.random() * 5) + 1;
    }

    calculateAnswers(randomList: number[], subsequenceSize: number): AnswerType {
        const correctValue = this.calculateLIS(randomList, subsequenceSize);
        const answers = {
            correctValue: correctValue,
            falseValue1: correctValue + Math.floor(Math.random() * 10),
            falseValue2: correctValue - Math.floor(Math.random() * 100),
            falseValue3: correctValue - Math.floor(Math.random() * 5)
        } as AnswerType;
        return answers;
    }

    private calculateLIS(randomList: number[], subsequenceSize: number): number {
        const randomListSize = randomList.length;
        let memoization = new Array(randomListSize);
		for(let i = 0; i < randomListSize; i++) {
			for(let j = 0; j < subsequenceSize; j++) {
				memoization[i][j]=0;
            }
        }
		for(let i = 0; i < randomListSize; i++) {
			memoization[i][0]=1;
        }
		for(let l = 2; l <= subsequenceSize; l++){
			for(let i = 0; i < randomListSize; i++) {
				for(let j = 0; j < i; j++) {
					if(randomList[i] > randomList[j]) {
						memoization[i][l-1]+=memoization[j][l-2];
                    }
                }
            }
        }
		let ans = 0;
		for(let i = 0; i < randomListSize; i++) {
			ans += memoization[i][subsequenceSize-1];
        }
        return ans;
    }
}

