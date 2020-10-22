import AbstractView from './AbstractView.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.params = params;
    }
    mainFunction = () => {
        this.cursorAnimation();
    }
    getNext = () => {
        if (this.params.id === '7') {
            return '1'
        }
        return +this.params.id + 1 
    }
    getPrew = () => {
        if (this.params.id == '1') {
            return '7'
        }
        return +this.params.id - 1
    }
    modular = () => {
        return `
        <div class="about-text">
            <h2><span class="about-text-space"></span>Modular —
                generative layouts for portfolio</h2>
            <p>Website creating by dynamic modular grid and 5x2//8x10 ratio. All content isn't commercial and using by
                presenting purposes</p>
        </div>
        <div class="works-content">
            <video src="/static/assets/works/md_1.mp4" autoplay muted loop="true"></video>
            <img src="/static/assets/works/md_2.png" alt="" />
            <video src="/static/assets/works/md_3.mp4" autoplay muted loop="true"></video>
        </div>
        `
    }
    tele2 = () => {
        return `
        <div class="works-content">
            <video src="/static/assets/works/Tl_1.mp4" autoplay muted loop="true"></video>
            <img src="/static/assets/works/Tl_2.png" alt="" />
            <img src="/static/assets/works/Tl_3.png" alt="" />
            <img src="/static/assets/works/Tl_4.png" alt="" />
        </div>
        `
    }
    conc18 = () => {
        return `
        <div class="works-content">
            <video src="/static/assets/works/Cnc_1.mp4" autoplay muted loop="true"></video>
            <video src="/static/assets/works/Cnc_2.mp4" autoplay muted loop="true"></video>
            <video src="/static/assets/works/Cnc_3.mp4" autoplay muted loop="true"></video>
            <video src="/static/assets/works/Cnc_4.mp4" autoplay muted loop="true"></video>
            <img src="/static/assets/works/Cnc_5.png" alt="" />
        </div>
        `
    }
    kish = () => {
        return `
        <div class="works-content">
            <video src="/static/assets/works/Ks_1.mp4" autoplay muted loop="true"></video>
            <video src="/static/assets/works/Ks_2.mp4" autoplay muted loop="true"></video>
            <img src="/static/assets/works/Ks_3.png" alt="" />
            <video src="/static/assets/works/Ks_4.mp4" autoplay muted loop="true"></video>
            
        </div>
        `
    }
    qslim = () => {
        return `
        <div class="works-content">
            <video src="/static/assets/works/QS_1.mp4" autoplay muted loop="true"></video>
            <img src="/static/assets/works/QS_2.png" alt="" />
            <img src="/static/assets/works/QS_3.png" alt="" />
        </div>
        `
    }
    conc17 = () => {
        return `
        <div class="works-content">
            <video src="/static/assets/works/Cp_1.mp4" autoplay muted loop="true"></video>
            <video src="/static/assets/works/Cp_2.mp4" autoplay muted loop="true"></video>
            <video src="/static/assets/works/Cp_3.mp4" autoplay muted loop="true"></video>
            <img src="/static/assets/works/Cp_4.png" alt="" />
        </div>
        `
    }
    popTube = () => {
        return `
        <div class="works-content">
            <video src="/static/assets/works/Pt_1.mp4" autoplay muted loop="true"></video>
            <video src="/static/assets/works/Pt_2.mp4" autoplay muted loop="true"></video>
            <img src="/static/assets/works/Pt_3.png" alt="" />
            <img src="/static/assets/works/Pt_4.png" alt="" />
        </div>
        `
    }
    getSlide = () => {
        switch (this.params.id) {
            case '1':
                return this.tele2();
                break;
            case '2':
                return this.modular();
                break;
            case '3': 
                return this.conc18();
                break;
            case '4': 
                return this.kish();
                break;
            case '5': 
                return this.qslim();
                break;
            case '6':
                return this.conc17();
                break;
            case '7':
                return this.popTube();
                break;
            default:
                return 'something is wrong'
        }
    }
    async getHtml() {
        return `
        <main class="works-container slideInUp" >
            ${this.getSlide()}

            <div class="works-nav">
            <a href="/works/${this.getPrew()}" class="works-nav-prew">
              <svg width="85" height="29" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.513 5.63763e-06C17.9745 5.28775 15.5997 9.25357 13.3887 11.8974L85 11.8974L85 17.1026L13.3887 17.1026C15.5997 19.7464 17.9745 23.7123 20.513 29L16.2139 29C11.0549 22.9687 5.65029 18.5071 -1.17012e-06 15.6154L-1.36514e-06 13.3846C5.65029 10.5755 11.0549 6.11397 16.2139 6.01347e-06L20.513 5.63763e-06Z" fill="black"/>
              </svg>
              <span>Prew</span>
            </a>
            <a href="/works/${this.getNext()}" class="works-nav-next">
              <span>Next</span>
              <svg width="85" height="29" viewBox="0 0 85 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.487 29C67.0255 23.7123 69.4003 19.7464 71.6113 17.1026L0 17.1026L0 11.8974L71.6113 11.8974C69.4003 9.25356 67.0255 5.28775 64.487 0L68.7861 0C73.9451 6.03134 79.3497 10.4929 85 13.3846V15.6154C79.3497 18.4245 73.9451 22.886 68.7861 29H64.487Z" fill="black"/>
                </svg>
                        
            </a>
          </div>
          
        </main>
        `


    }
}