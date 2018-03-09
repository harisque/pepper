/**
 * Created by wangkaikang on 3/5/18.
 */

alert('init');

QiSession(function (session) {
    alert('connected');

    $.ajax({
        url:"data.json",
        type:"GET",
        dataType:"json",
        error: function(xhr,error){
            alert(xhr);
            alert(error)
        },
        complete:function(response){
            alert('got data');
            data = response.responseJSON;
            mydata = data;
            var components = {};
            var app = new Vue({
                el: '#app',
                data: {currentView: 'home'},
                components: createComponent(mydata, 'home', components),
                methods: {
                    changeView: function (key) {
                        this.$options.components = createComponent(mydata, key, components);
                        this.currentView = key;
                        robotSay(mydata[key]['content']['display']);
                    }
                }
            });
            function createComponent(data, name, components) {
                components[name] = {
                    template: data[name].template,
                    data: function () {
                        return data[name].content
                    },
                    computed: {
                        cols: function () {
                            if (this.$options.template == '#menu') {
                                len = this._data.members.length;
                                switch (len) {
                                    case 1:
                                        return 'single-col';
                                    case 2:
                                        return 'two-col';
                                    case 3:
                                        return 'three-col';
                                    case 4:
                                        return 'two-col';
                                    case 5:
                                        return 'three-col';
                                    case 6:
                                        return 'three-col';
                                    case 7:
                                        return 'four-col';
                                    case 8:
                                        return 'four-col';
                                }
                            }
                        }
                    },
                    methods: {
                        changeView: function () {
                            this.$emit('jump', event.target.name)
                        }
                    }
                };
                return components
            }
        }
    });
    function robotSay(text){
        session.service("ALTextToSpeech").then(function (tts) {
            // tts is a proxy to the ALTextToSpeech service
            tts.say(text)
        }, function (error) {
            console.log("An error occurred:", error);
        });
    }
}, function () {
    alert('disconnected');
});



var jumpToView = function(key){
    app.__vue__.changeView(key)
};

