class url {
    private text: string;
    private link: string;

    public constructor(text: string, link: string){
        this.text = text;
        this.link = link;
    }

    public getText(): string {
        return this.text;
    }

    public getLink(): string {
        return this.link;
    }
}

let urls: Array<url> = [];
