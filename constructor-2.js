function makeObjectTwo(idValue, pwValue, emailValue) {
  // 함수를 "선언식" 방식, 기명함수 방식으로 바꾸었고
  // this 바인딩 능력을 활용해 제작했다.
  this.id = idValue;
  this.password = pwValue;
  this.email = emailValue;
}

