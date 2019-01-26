import moji from 'moji';

(function() {
    var events = [
        "app.record.create.submit",
        "app.record.edit.submit",
    ]
    kintone.events.on(events, function(event) {
        var record = event.record;
        record['Text_Field'].value = moji(record['Text_Field'].value).convert('ZE', 'HE').toString();
        return event;
    });
}());