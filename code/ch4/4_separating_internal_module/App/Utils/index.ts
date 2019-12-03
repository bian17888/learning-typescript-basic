namespace App.Utils {
  export interface ILogger {
    write: (msg: string) => void;
  }

  export class Logger implements ILogger {
    private writer: any;

    constructor(public mode: number = LoggerMode.Console) {
      switch (this.mode) {
        case LoggerMode.Console:
          this.writer = (msg: string) => console.log(msg);
        case LoggerMode.Alert:
          this.writer = (msg: string) => alert(msg);
      }
    }

    write(msg: string) {
      this.writer(msg);
    }
  }
}
