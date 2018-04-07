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
        this.isAnimate = false;
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
            if(!this.isAnimate){
                this.playPre(1);
            }
            
        })
        this.nextBtn.on("click", ()=>{
            if(!this.isAnimate){
                this.playNext(1);
            }
        })
        this.bullets.on("click",(e) =>{
            if(!this.isAnimate){
                if($(e.target).index() > this.index){
                    this.playNext($(e.target).index() - this.index);
              }else{
                  this.playPre(this.index - $(e.target).index());
              }
            }
           
        })
    }
    playNext(len){
        this.isAnimate = true;
        this.imgCt.animate({
            left:"-="+this.imgWidth*len
        },400, () =>{
            this.index += len;
            
            if(this.index === this.imgCount){
                this.imgCt.css("left",-this.imgWidth);
                this.index = 0;
            }
            this.bullets.eq(this.index).addClass("active").siblings().removeClass("active");
            this.isAnimate = false;
        });
        
    }
    playPre(len){
        this.isAnimate = true;
        this.imgCt.animate({
            left:"+="+this.imgWidth*len
        },400, () =>{
            this.index -= len;
            
            if(this.index === -1){
                this.imgCt.css("left",-(this.imgWidth)*this.imgCount);
                this.index = this.imgCount-1;
            }
            this.bullets.eq(this.index).addClass("active").siblings().removeClass("active");
            this.isAnimate = false;
        });
    }
    clockBull($bull){
       this.index = $bull.index();
       this.imgCt.animate({
           left:'-'+(this.index+1)*this.imgWidth
       },400)
       this.bullets.eq(this.index).addClass("active").siblings().removeClass("active")
    }
    
}



// let p = new Carousel($(".carousel"))