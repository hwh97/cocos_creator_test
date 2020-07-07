const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Button)
    playBtn: cc.Button = null;

    @property
    text: string = '';

    @property
    aa: string = "";

    start () {
        window.addEventListener("flutterInAppBrowserPlatformReady", function(event) {
        });
        let _this = this;
        window.appSendJs = function(args){
            console.log(args)
            _this.label.string = args;
        }
        // init logic
        this.label.string = this.text;
        this.playBtn.node.on('click', this.play, this);
    }

    play () {
        try {
            const data = JSON.stringify([1, true, ['bar', 5], {foo: 'baz'}]);
            if (window.flutter_inappwebview.callHandler) {
                window.flutter_inappwebview.callHandler('handlerName', data).then(function(result) {
                    console.log(result);
                });
            } else {
                window.flutter_inappwebview._callHandler('handlerName', setTimeout(function(){}), JSON.stringify(data));
            }
        } catch(e) {
            console.log(e)
        }
    }
}
