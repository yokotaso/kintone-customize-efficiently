import Vue from 'vue';
(() => {
    const events = [
        "app.record.create.show",
        "app.record.edit.show",
    ];
    kintone.events.on(events, (ev) => {
        const el = kintone.app.record.getHeaderMenuSpaceElement()
        const template = `<div v-if="show">
                            {{ message }}
                        </div>`;

        const data = {
            message : "hello world!",
            show: true
        };
        new Vue({
            el,
            template,
            data
        });
        Object.assign({}, {a:1}, {b:1});
        "".pardStart(2, "0");
    });
})();