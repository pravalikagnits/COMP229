function parentFN() {
    const message = 'Hello World';
    function child() {
        alert(message);
    }
    return child;
}
const childFN = parentFN();
childFN();
