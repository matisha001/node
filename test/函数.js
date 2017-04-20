/*函数传递
 */
function say(word) {
    console.log(word);
}
function execute(someFunction, value) {
    someFunction(value);
}
execute(say, "Hello");
/*匿名函数
*/
function execute(someFunction, value) {
    someFunction(value);
}
execute(function(word) { console.log(word) }, "Hello");
