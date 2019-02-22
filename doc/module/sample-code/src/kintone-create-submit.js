import moji from 'moji';
import {isEmpty} from './empty-string';

(function() {
    var events = [
        "app.record.create.submit",
        "app.record.edit.submit",
    ]
    kintone.events.on(events, function(event) {
        var record = event.record;
        if(isEmpty(record['Text_Field'].value)) {
            record['Text_Field'].error = '必須事項です';
            return event;
        }
        record['Text_Field'].value = moji(record['Text_Field'].value).convert('ZE', 'HE').toString();
        return event;
    });
}());