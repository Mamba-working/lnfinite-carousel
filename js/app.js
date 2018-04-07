class Carousel{
    constructor($this){
        this.imgCt = $this.find(".img-ct");
        this.imgs = $this.find(".img-ct>li");
        this.preBtn = $this.find(".pre");
        this.nextBtn = $this.find(".next");
        this.bullets = $this.find(".bullet>li");
        this.imgWidth = this.imgs.width();
        this.imgCount = this.imgs.length;
        this.index = 0;
        this.init();
    }
    init(){
        this.imgCt.width((this.imgCount+2)*this.imgWidth);
        this.imgCt.append(this.imgs.first().clone());
        this.imgCt.prepend(this.imgs.last().clone());
        this.imgCt.css("left",-this.imgWidth)
        this.bind()
    }
    bind(){
        this.preBtn.on("click",  () =>{
            this.playPre();
        })
        this.nextBtn.on("click", ()=>{
            this.playNext();
        })
        this.bullets.on("click",(e) =>{
            this.clockBull($(e.target));
        })
    }
    playNext(len){
        this.imgCt.animate({
            left:"-="+this.imgWidth
        },() =>{
            this.index++;
            
            if(this.index=== this.imgCount){
                this.imgCt.css("left",-this.imgWidth);
                this.index = 0;
            }
            this.bullets.eq(this.index).addClass("active").siblings().removeClass("active")
        });
        
    }
    playPre(len){
        this.imgCt.animate({
            left:"+="+this.imgWidth
        }, () =>{
            this.index--;
            
            if(this.index === -1){
                this.imgCt.css("left",-(this.imgWidth)*this.imgCount);
                this.index = this.imgCount-1;
            }
            this.bullets.eq(this.index).addClass("active").siblings().removeClass("active")
        });
    }
    clockBull($bull){
       this.index = $bull.index();
       this.imgCt.animate({
           left:'-'+(this.index+1)*this.imgWidth
       })
       this.bullets.eq(this.index).addClass("active").siblings().removeClass("active")
    }
    
}



