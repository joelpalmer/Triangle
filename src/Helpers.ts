module app {
    export class Helpers {
        public static distinctCount(a: number[]): number {
            return a.filter((val, i, arr) => {
                return arr.indexOf(val) === i;
            }).length;
        }
    }
}