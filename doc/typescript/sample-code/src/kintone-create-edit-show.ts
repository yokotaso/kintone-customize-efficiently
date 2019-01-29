import v8n from "v8n";

(() => {
    const undefined = v8n().undefined();
    interface Event {
        record: kintone.types.SavedFields;
    }
    const events = [
        "app.record.create.submit",
        "app.record.edit.submit",
    ];
    kintone.events.on(events, (e: Event) => {
        if(undefined.test(e.record.Text.value)) {
            e.record.Text.error = "必須項目です";
        }
        return e;
    });
})();