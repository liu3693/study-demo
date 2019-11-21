let lineChart = {
    data:[],
    lengthX:500,
    lengthY:300,
    radius:4,
    interval:35,
    max:710,
    origin:{x:50,y:350},
    toPx:function (num) {
        return num*(this.lengthY/this.max)
    },

    // 设置数据
    setData:function (obj) {
        this.data.length = 0;
        this.data.push(obj)
    },
    // 传入canvas的id，绘制
    draw:function (id) {
        const c1 = document.getElementById(id);
        const ctx2d = c1.getContext('2d');
        c1.width = 600;
        c1.height = 400;

        //x,y轴
        ctx2d.beginPath();
        ctx2d.moveTo(this.origin.x,this.origin.y);
        ctx2d.lineTo(this.origin.x+this.lengthX,this.origin.y);
        ctx2d.stroke();
        ctx2d.beginPath();
        ctx2d.moveTo(this.origin.x,this.origin.y);
        ctx2d.lineTo(this.origin.x,this.origin.y-this.lengthY);
        ctx2d.stroke();

        //刻度
        ctx2d.save();
        ctx2d.textAlign = 'center';
        for (let i = 0; i < 12; i++) {
            ctx2d.strokeText((i+1).toString()+'月',this.origin.x+this.interval*(i+1),this.origin.y+10);
        }
        ctx2d.restore();
        ctx2d.save();
        ctx2d.textAlign = 'right';
        ctx2d.textBaseline = 'middle';
        for (let i = 0; i < 5; i++) {
            ctx2d.strokeText((this.max/5*(i+1)).toString(),this.origin.x-3,this.origin.y-(this.lengthY/5)*(i+1));
        }
        ctx2d.restore();

        //点
        let saleArr = this.data[0].sale;
        for (let i = 0; i < saleArr.length; i++) {
            ctx2d.beginPath();
            ctx2d.arc(this.origin.x+this.interval*(i+1),this.origin.y-this.toPx(parseFloat(saleArr[i])), this.radius, 0,2*Math.PI,true);
            ctx2d.fill();
            if (i !== 0) {
                ctx2d.moveTo(this.origin.x+this.interval*(i+1),this.origin.y-this.toPx(parseFloat(saleArr[i])));
                ctx2d.lineTo(this.origin.x+this.interval*(i),this.origin.y-this.toPx(parseFloat(saleArr[i-1])));
                ctx2d.stroke();
            }

        }
    }
};

export {lineChart}

