declare module "zeptomail" {
  export class SendMailClient {
    constructor(config: { url: string; token: string });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    sendMail(mailData: any): Promise<any>;
  }
}
