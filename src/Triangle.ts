module app.shapes {
    import Helpers = app.Helpers;
    enum TriangleClassification {
        Equilateral = <any>'Equilateral',
        Isosceles = <any>'Isosceles',
        Scalene = <any>'Scalene',
        NotATriangle = <any>'Not a Triangle'
    }
    export class Triangle {
        constructor() {

        }

        public static GetTriangleClassification() {
            TriangleLookupForm.GetSides();
            let sides: number[] = new Array(TriangleLookupForm.Side1, TriangleLookupForm.Side2, TriangleLookupForm.Side3);

            if (sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0) {
                document.getElementById('result').innerHTML = `${TriangleClassification.NotATriangle}`;
            }

            else if (Helpers.distinctCount(sides) === 1) { //3 equal sides
                document.getElementById('result').innerHTML = `${TriangleClassification.Equilateral}`;
            }

            else if (Helpers.distinctCount(sides) === 2) { //2 equal sides
                document.getElementById('result').innerHTML = `${TriangleClassification.Isosceles}`;
            }

            else if (Helpers.distinctCount(sides) === 3) { //no equal sides
                document.getElementById('result').innerHTML = `${TriangleClassification.Scalene}`;
            }

            else {
                document.getElementById('result').innerHTML = `${TriangleClassification.NotATriangle}`;
            }
        }
    }

    class TriangleLookupForm {
        public static Side1: number;
        public static Side2: number;
        public static Side3: number;

        public static GetSides() {
            TriangleLookupForm.Side1 = parseFloat((<HTMLInputElement>document.getElementById("side1")).value);
            TriangleLookupForm.Side2 = parseFloat((<HTMLInputElement>document.getElementById("side2")).value);
            TriangleLookupForm.Side3 = parseFloat((<HTMLInputElement>document.getElementById("side3")).value);
        }

        public static BindSubmit() {
            document.getElementById("submit") && document.getElementById("submit")
                .addEventListener("click", Triangle.GetTriangleClassification, !1);
        }

    }

    TriangleLookupForm.BindSubmit();
}



