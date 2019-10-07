function inte(percent) {
    var canvas_1 = document.querySelector('#canvas_1');
    var canvas_2 = document.querySelector('#canvas_2');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 20;
    ctx_1.strokeStyle = "#D4DFE6";
    //底部灰色
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    if (percent < 0 || percent > 100) {
      throw new Error('percent must be between 0 and 100');
      return
    }
    ctx_2.lineWidth = 20;
    ctx_2.strokeStyle = "#8EC0E4";
    var angle = 0;
    var timer;
    (function draw() {
      timer = requestAnimationFrame(draw);
      ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height)
      //百分比圓環
      ctx_2.beginPath();
      ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
      angle=angle+5;//速度
      var percentAge = parseInt((angle / 360) * 100)
      if (angle > (percent / 100 * 360)) {
        percentAge = percent
        window.cancelAnimationFrame(timer);
      };
      ctx_2.stroke();
      ctx_2.closePath();
      ctx_2.save();
      ctx_2.beginPath();
      ctx_2.rotate(90 * Math.PI / 180)
      ctx_2.closePath();
      ctx_2.restore();
    })()
  }

  function inte2(percent) {
    var canvas_1 = document.querySelector('#canvas_3');
    var canvas_2 = document.querySelector('#canvas_4');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 20;
    ctx_1.strokeStyle = "#D4DFE6";
    //底部灰色
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    if (percent < 0 || percent > 100) {
      throw new Error('percent must be between 0 and 100');
      return
    }
    ctx_2.lineWidth = 20;
    ctx_2.strokeStyle = "#8EC0E4";
    var angle = 0;
    var timer;
    (function draw() {
      timer = requestAnimationFrame(draw);
      ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height)
      //百分比圓環
      ctx_2.beginPath();
      ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
      angle=angle+5;//速度
      var percentAge = parseInt((angle / 360) * 100)
      if (angle > (percent / 100 * 360)) {
        percentAge = percent
        window.cancelAnimationFrame(timer);
      };
      ctx_2.stroke();
      ctx_2.closePath();
      ctx_2.save();
      ctx_2.beginPath();
      ctx_2.rotate(90 * Math.PI / 180)
      ctx_2.closePath();
      ctx_2.restore();
    })()
  }

  function inte3(percent) {
    var canvas_1 = document.querySelector('#canvas_5');
    var canvas_2 = document.querySelector('#canvas_6');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 20;
    ctx_1.strokeStyle = "#D4DFE6";
    //底部灰色
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    if (percent < 0 || percent > 100) {
      throw new Error('percent must be between 0 and 100');
      return
    }
    ctx_2.lineWidth = 20;
    ctx_2.strokeStyle = "#8EC0E4";
    var angle = 0;
    var timer;
    (function draw() {
      timer = requestAnimationFrame(draw);
      ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height)
      //百分比圓環
      ctx_2.beginPath();
      ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
      angle=angle+5;//速度
      var percentAge = parseInt((angle / 360) * 100)
      if (angle > (percent / 100 * 360)) {
        percentAge = percent
        window.cancelAnimationFrame(timer);
      };
      ctx_2.stroke();
      ctx_2.closePath();
      ctx_2.save();
      ctx_2.beginPath();
      ctx_2.rotate(90 * Math.PI / 180)
      ctx_2.closePath();
      ctx_2.restore();
    })()
  }

  function inte4(percent) {
    var canvas_1 = document.querySelector('#canvas_7');
    var canvas_2 = document.querySelector('#canvas_8');
    var ctx_1 = canvas_1.getContext('2d');
    var ctx_2 = canvas_2.getContext('2d');
    ctx_1.lineWidth = 20;
    ctx_1.strokeStyle = "#D4DFE6";
    //底部灰色
    ctx_1.beginPath();
    ctx_1.arc(canvas_1.width / 2, canvas_1.height / 2, canvas_1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
    ctx_1.closePath();
    ctx_1.stroke();
    if (percent < 0 || percent > 100) {
      throw new Error('percent must be between 0 and 100');
      return
    }
    ctx_2.lineWidth = 20;
    ctx_2.strokeStyle = "#8EC0E4";
    var angle = 0;
    var timer;
    (function draw() {
      timer = requestAnimationFrame(draw);
      ctx_2.clearRect(0, 0, canvas_2.width, canvas_2.height)
      //百分比圓環
      ctx_2.beginPath();
      ctx_2.arc(canvas_2.width / 2, canvas_2.height / 2, canvas_2.width / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
      angle=angle+5;//速度
      var percentAge = parseInt((angle / 360) * 100)
      if (angle > (percent / 100 * 360)) {
        percentAge = percent
        window.cancelAnimationFrame(timer);
      };
      ctx_2.stroke();
      ctx_2.closePath();
      ctx_2.save();
      ctx_2.beginPath();
      ctx_2.rotate(90 * Math.PI / 180)
      ctx_2.closePath();
      ctx_2.restore();
    })()
  }