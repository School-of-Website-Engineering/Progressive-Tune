//背景闪烁
//工具方法 增加提示类 增加一个新的类名
//第一个参数接收被控制的元素类名
//第二个参数接收需要新增的类名
export const addClassName = (className, newClassName) => {
  //获取该类名元素节点
  let classNameNode = document.querySelector(className);
  //元素节点存在则遍历新增类名
  if (classNameNode) {
    let classNameArr = classNameNode.className.split(" ");
    //将原有的类名放进数组
    for (let i = 0; i < newClassName.length; i++) {
      //类名不存在原有的时候则新增
      if (!classNameArr.includes(newClassName[i])) {
        classNameArr.push(newClassName[i]); // 添加新类名后过两秒自动删除
        setTimeout(() => {
          classNameArr.splice(classNameArr.indexOf(newClassName[i]), 1);
          // 从类名数组中移除新增类名
          let allClassName = classNameArr.join(" ");
          // 将所有类名组装成字符串
          classNameNode.className = allClassName;
          // 将组装后的字符串赋值
        }, 2100);
      }
    }
    //存在原有的类名，为元素添加新的类名
    let allClassName = classNameArr.join(" ");
    classNameNode.className = allClassName;
  }
};
// //使用方法示例：
// //JS中调用：
// addClassName(".className", ["alertMsg", ""]);

// //Vue中：
// this.addClassName(".className", ["dangerMsg", ""]);
