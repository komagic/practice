(function () {
    var tb = {
        ajax: function (obj) {
            let _this = this;
            this.method = 'get';
            this.url = '';
            this.data = '';
            this.type = '';
            this.suc = '';
            this.fail = '';

            if (typeof obj === 'object') {
                Object.assign(this, obj);
            }

            const xhr = new XMLHttpRequest();

            xhr.open(this.method, this.url, true); //第三个参数是否异步
            if (this.method.toLowerCase() === 'post') {
                xhr.setRequestHeader('author', 'tanbo');
                xhr.setRequestHeader('Content-Type', 'application/json');
            }
           xhr.send(JSON.stringify(this.data));

            xhr.onload = function () {
                let status = xhr.status;

                if (status >= 200 && status < 300 || status == 304) {

                    if (typeof _this.suc === 'function') {

                        //let data = _this.type === 'jason' ? JSON.parse(xhr.responseText) : xhr.responseText;

                        _this.suc();
                    }
                }

                if (status >= 400) {
                    if (typeof _this.fail === 'function') {
                        //let data = _this.type === 'jason' ? JSON.parse(xhr.responseText) : xhr.responseText;
                        _this.fail();
                    }
                }
            }
            return this;
        }


    }
    window.tb = tb;
})();