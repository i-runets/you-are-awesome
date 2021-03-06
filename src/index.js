// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
    return property;
};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        enumerable: false,
        value: 'value'
    });
    return property;
};
const createProtoMagicObject = () => {};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    return Object('object');
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort(function(a,b){
        return a - b
    })
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;