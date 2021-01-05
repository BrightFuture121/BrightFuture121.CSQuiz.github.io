"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var QuizApp = (function (_super) {
    __extends(QuizApp, _super);
    function QuizApp() {
        return _super.call(this) || this;
    }
    QuizApp.prototype.render = function () {
        return (<div className="quiz">
                 
                Quiz
            </div>);
    };
    return QuizApp;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuizApp;
//# sourceMappingURL=QuizApp.js.map