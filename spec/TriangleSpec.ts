import Triangle = app.shapes.Triangle;
import Helpers = app.Helpers;
import {} from 'jasmine';

describe('Triangle helper specs', () => {
    it('should return 1 unique value', () => {
        const d = Helpers.distinctCount([1,1,1]);
        expect(d).toEqual(1);
    });

    it('should return 2 unique values', () => {
        const x = Helpers.distinctCount([1,2,1]);
        expect(x).toEqual(2);
    });
        
});