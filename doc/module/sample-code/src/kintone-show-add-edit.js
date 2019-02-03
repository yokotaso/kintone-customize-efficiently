import $ from 'jquery';

(function() {
    var events = [
        "app.record.create.show",
        "app.record.edit.show"
    ];
    kintone.events.on(events, function(event) {
        var button = $('<button />').text("Click me");
        $(kintone.app.record.getSpaceElement('Space_Field'))
            .append(button);
        return event;
    })
})();