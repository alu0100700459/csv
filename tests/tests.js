var assert = chai.assert;

suite('csv', function() {
    test('Entrada válida', function () {
        original.value = 'a,"b, c",d,e\nf,g,h,i';
        calculate();
        var expected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>a</td>\n            \n              <td>b, c</td>\n            \n              <td>d</td>\n            \n              <td>e</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>f</td>\n            \n              <td>g</td>\n            \n              <td>h</td>\n            \n              <td>i</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ';
        assert.deepEqual(finaltable.innerHTML, expected);
    });
    test('Entrada con errores en una fila', function () {
        original.value = "a,b c,c,d\ne\\\"_,f,g,h\ni,j,k,l,l";
        calculate();
        var expected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>a</td>\n            \n              <td>b c</td>\n            \n              <td>c</td>\n            \n              <td>d</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>e\"_</td>\n            \n              <td>f</td>\n            \n              <td>g</td>\n            \n              <td>h</td>\n            \n          </tr>\n        \n          <tr class="error">\n            \n              <td>i</td>\n            \n              <td>j</td>\n            \n              <td>k</td>\n            \n              <td>l</td>\n            \n              <td>l</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ';
        assert.deepEqual(finaltable.innerHTML, expected);
    });
    test('Funciona el almacenamiento local', function () {
        assert.deepEqual(localStorage.original, "a,b c,c,d\ne\\\"_,f,g,h\ni,j,k,l,l");
    });
});
