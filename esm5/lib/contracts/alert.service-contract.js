// ******************** Dialog ********************//
var AlertDialog = /** @class */ (function () {
    function AlertDialog(message, type, okCallback, cancelCallback, defaultValue, okLabel, cancelLabel) {
        this.message = message;
        this.type = type;
        this.okCallback = okCallback;
        this.cancelCallback = cancelCallback;
        this.defaultValue = defaultValue;
        this.okLabel = okLabel;
        this.cancelLabel = cancelLabel;
    }
    return AlertDialog;
}());
export { AlertDialog };
export var DialogType;
(function (DialogType) {
    DialogType[DialogType["alert"] = 0] = "alert";
    DialogType[DialogType["confirm"] = 1] = "confirm";
    DialogType[DialogType["prompt"] = 2] = "prompt";
})(DialogType || (DialogType = {}));
// ******************** End ********************//
// ******************** Growls ********************//
var AlertCommand = /** @class */ (function () {
    function AlertCommand(operation, message, onRemove) {
        this.operation = operation;
        this.message = message;
        this.onRemove = onRemove;
    }
    return AlertCommand;
}());
export { AlertCommand };
var AlertMessage = /** @class */ (function () {
    function AlertMessage(severity, summary, detail) {
        this.severity = severity;
        this.summary = summary;
        this.detail = detail;
    }
    return AlertMessage;
}());
export { AlertMessage };
export var MessageSeverity;
(function (MessageSeverity) {
    MessageSeverity[MessageSeverity["default"] = 0] = "default";
    MessageSeverity[MessageSeverity["info"] = 1] = "info";
    MessageSeverity[MessageSeverity["success"] = 2] = "success";
    MessageSeverity[MessageSeverity["error"] = 3] = "error";
    MessageSeverity[MessageSeverity["warn"] = 4] = "warn";
    MessageSeverity[MessageSeverity["wait"] = 5] = "wait";
})(MessageSeverity || (MessageSeverity = {}));
// ******************** End ********************//
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS1jb250cmFjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bwb2xwd2FyZS9uZ3gtYXBwa2l0LWNvbnRyYWN0cy1hbHBoYS8iLCJzb3VyY2VzIjpbImxpYi9jb250cmFjdHMvYWxlcnQuc2VydmljZS1jb250cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtREEscURBQXFEO0FBQ3JEO0lBQ0kscUJBQ1csT0FBZSxFQUNmLElBQWdCLEVBQ2hCLFVBQThCLEVBQzlCLGNBQXlCLEVBQ3pCLFlBQW9CLEVBQ3BCLE9BQWUsRUFDZixXQUFtQjtRQU5uQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBVztRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBUTtRQUNwQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFFOUIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7O0FBRUQsTUFBTSxDQUFOLElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNsQiw2Q0FBSyxDQUFBO0lBQ0wsaURBQU8sQ0FBQTtJQUNQLCtDQUFNLENBQUE7QUFDVixDQUFDLEVBSlcsVUFBVSxLQUFWLFVBQVUsUUFJckI7QUFDRCxrREFBa0Q7QUFHbEQscURBQXFEO0FBQ3JEO0lBQ0ksc0JBQ1csU0FBeUMsRUFDekMsT0FBc0IsRUFDdEIsUUFBb0I7UUFGcEIsY0FBUyxHQUFULFNBQVMsQ0FBZ0M7UUFDekMsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFZO0lBQUksQ0FBQztJQUN4QyxtQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQUVEO0lBQ0ksc0JBQ1csUUFBeUIsRUFDekIsT0FBZSxFQUNmLE1BQWM7UUFGZCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFDbEMsbUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQzs7QUFFRCxNQUFNLENBQU4sSUFBWSxlQU9YO0FBUEQsV0FBWSxlQUFlO0lBQ3ZCLDJEQUFPLENBQUE7SUFDUCxxREFBSSxDQUFBO0lBQ0osMkRBQU8sQ0FBQTtJQUNQLHVEQUFLLENBQUE7SUFDTCxxREFBSSxDQUFBO0lBQ0oscURBQUksQ0FBQTtBQUNSLENBQUMsRUFQVyxlQUFlLEtBQWYsZUFBZSxRQU8xQjtBQUNELGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXNwb25zZUJhc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFsZXJ0U2VydmljZUNvbnRyYWN0IHtcblxuXG4gICAgc2hvd0RpYWxvZyhtZXNzYWdlOiBzdHJpbmcpO1xuICAgIHNob3dEaWFsb2cobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBEaWFsb2dUeXBlLCBva0NhbGxiYWNrOiAodmFsPzogYW55KSA9PiBhbnkpO1xuICAgIHNob3dEaWFsb2cobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBEaWFsb2dUeXBlLCBva0NhbGxiYWNrPzogKHZhbD86IGFueSkgPT4gYW55LCBjYW5jZWxDYWxsYmFjaz86ICgpID0+IGFueSwgb2tMYWJlbD86IHN0cmluZywgY2FuY2VsTGFiZWw/OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk7XG4gICAgc2hvd0RpYWxvZyhtZXNzYWdlOiBzdHJpbmcsIHR5cGU/OiBEaWFsb2dUeXBlLCBva0NhbGxiYWNrPzogKHZhbD86IGFueSkgPT4gYW55LCBjYW5jZWxDYWxsYmFjaz86ICgpID0+IGFueSwgb2tMYWJlbD86IHN0cmluZywgY2FuY2VsTGFiZWw/OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZyk7XG5cblxuICAgIHNob3dNZXNzYWdlKHN1bW1hcnk6IHN0cmluZyk7XG4gICAgc2hvd01lc3NhZ2Uoc3VtbWFyeTogc3RyaW5nLCBkZXRhaWw6IHN0cmluZywgc2V2ZXJpdHk6IE1lc3NhZ2VTZXZlcml0eSk7XG4gICAgc2hvd01lc3NhZ2Uoc3VtbWFyeUFuZERldGFpbHM6IHN0cmluZ1tdLCBzdW1tYXJ5QW5kRGV0YWlsc1NlcGFyYXRvcjogc3RyaW5nLCBzZXZlcml0eTogTWVzc2FnZVNldmVyaXR5KTtcbiAgICBzaG93TWVzc2FnZShyZXNwb25zZTogSHR0cFJlc3BvbnNlQmFzZSwgaWdub3JlVmFsdWVfdXNlTnVsbDogc3RyaW5nLCBzZXZlcml0eTogTWVzc2FnZVNldmVyaXR5KTtcbiAgICBzaG93TWVzc2FnZShkYXRhOiBhbnksIHNlcGFyYXRvck9yRGV0YWlsPzogc3RyaW5nLCBzZXZlcml0eT86IE1lc3NhZ2VTZXZlcml0eSk7XG5cbiAgICBzaG93U3RpY2t5TWVzc2FnZShzdW1tYXJ5OiBzdHJpbmcpO1xuICAgIHNob3dTdGlja3lNZXNzYWdlKHN1bW1hcnk6IHN0cmluZywgZGV0YWlsOiBzdHJpbmcsIHNldmVyaXR5OiBNZXNzYWdlU2V2ZXJpdHksIGVycm9yPzogYW55KTtcbiAgICBzaG93U3RpY2t5TWVzc2FnZShzdW1tYXJ5OiBzdHJpbmcsIGRldGFpbDogc3RyaW5nLCBzZXZlcml0eTogTWVzc2FnZVNldmVyaXR5LCBlcnJvcj86IGFueSwgb25SZW1vdmU/OiAoKSA9PiBhbnkpO1xuICAgIHNob3dTdGlja3lNZXNzYWdlKHN1bW1hcnlBbmREZXRhaWxzOiBzdHJpbmdbXSwgc3VtbWFyeUFuZERldGFpbHNTZXBhcmF0b3I6IHN0cmluZywgc2V2ZXJpdHk6IE1lc3NhZ2VTZXZlcml0eSk7XG4gICAgc2hvd1N0aWNreU1lc3NhZ2UocmVzcG9uc2U6IEh0dHBSZXNwb25zZUJhc2UsIGlnbm9yZVZhbHVlX3VzZU51bGw6IHN0cmluZywgc2V2ZXJpdHk6IE1lc3NhZ2VTZXZlcml0eSk7XG4gICAgc2hvd1N0aWNreU1lc3NhZ2UoZGF0YTogc3RyaW5nIHwgc3RyaW5nW10gfCBIdHRwUmVzcG9uc2VCYXNlLCBzZXBhcmF0b3JPckRldGFpbD86IHN0cmluZywgc2V2ZXJpdHk/OiBNZXNzYWdlU2V2ZXJpdHksIGVycm9yPzogYW55LCBvblJlbW92ZT86ICgpID0+IGFueSk7XG5cbiAgICByZXNldFN0aWNreU1lc3NhZ2UoKTtcblxuXG4gICAgc3RhcnRMb2FkaW5nTWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIGNhcHRpb246IHN0cmluZyk7XG5cbiAgICBzdG9wTG9hZGluZ01lc3NhZ2UoKTtcblxuXG4gICAgbG9nRGVidWcobXNnKTtcblxuICAgIGxvZ0Vycm9yKG1zZyk7XG5cbiAgICBsb2dJbmZvKG1zZyk7XG5cbiAgICBsb2dNZXNzYWdlKG1zZyk7XG5cbiAgICBsb2dUcmFjZShtc2cpO1xuXG4gICAgbG9nV2FybmluZyhtc2cpO1xuXG4gICAgZ2V0RGlhbG9nRXZlbnQoKTogT2JzZXJ2YWJsZTxBbGVydERpYWxvZz47XG5cbiAgICBnZXRNZXNzYWdlRXZlbnQoKTogT2JzZXJ2YWJsZTxBbGVydENvbW1hbmQ+O1xufVxuXG5cbi8vICoqKioqKioqKioqKioqKioqKioqIERpYWxvZyAqKioqKioqKioqKioqKioqKioqKi8vXG5leHBvcnQgY2xhc3MgQWxlcnREaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nLFxuICAgICAgICBwdWJsaWMgdHlwZTogRGlhbG9nVHlwZSxcbiAgICAgICAgcHVibGljIG9rQ2FsbGJhY2s6ICh2YWw/OiBhbnkpID0+IGFueSxcbiAgICAgICAgcHVibGljIGNhbmNlbENhbGxiYWNrOiAoKSA9PiBhbnksXG4gICAgICAgIHB1YmxpYyBkZWZhdWx0VmFsdWU6IHN0cmluZyxcbiAgICAgICAgcHVibGljIG9rTGFiZWw6IHN0cmluZyxcbiAgICAgICAgcHVibGljIGNhbmNlbExhYmVsOiBzdHJpbmcpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGVudW0gRGlhbG9nVHlwZSB7XG4gICAgYWxlcnQsXG4gICAgY29uZmlybSxcbiAgICBwcm9tcHRcbn1cbi8vICoqKioqKioqKioqKioqKioqKioqIEVuZCAqKioqKioqKioqKioqKioqKioqKi8vXG5cblxuLy8gKioqKioqKioqKioqKioqKioqKiogR3Jvd2xzICoqKioqKioqKioqKioqKioqKioqLy9cbmV4cG9ydCBjbGFzcyBBbGVydENvbW1hbmQge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMgb3BlcmF0aW9uOiAnY2xlYXInIHwgJ2FkZCcgfCAnYWRkX3N0aWNreScsXG4gICAgICAgIHB1YmxpYyBtZXNzYWdlPzogQWxlcnRNZXNzYWdlLFxuICAgICAgICBwdWJsaWMgb25SZW1vdmU/OiAoKSA9PiBhbnkpIHsgfVxufVxuXG5leHBvcnQgY2xhc3MgQWxlcnRNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHVibGljIHNldmVyaXR5OiBNZXNzYWdlU2V2ZXJpdHksXG4gICAgICAgIHB1YmxpYyBzdW1tYXJ5OiBzdHJpbmcsXG4gICAgICAgIHB1YmxpYyBkZXRhaWw6IHN0cmluZykgeyB9XG59XG5cbmV4cG9ydCBlbnVtIE1lc3NhZ2VTZXZlcml0eSB7XG4gICAgZGVmYXVsdCxcbiAgICBpbmZvLFxuICAgIHN1Y2Nlc3MsXG4gICAgZXJyb3IsXG4gICAgd2FybixcbiAgICB3YWl0XG59XG4vLyAqKioqKioqKioqKioqKioqKioqKiBFbmQgKioqKioqKioqKioqKioqKioqKiovL1xuIl19