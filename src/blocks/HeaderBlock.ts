// src/blocks/HeaderBlock.ts
import { IBlock } from "./IBlock";
import { HeaderModel } from "../models/ResumeModel";

export class HeaderBlock implements IBlock {
  constructor(private model: HeaderModel) {}

  render(): HTMLElement {
    const container = document.createElement("section");
    container.className = "block header-block";

    const name = document.createElement("h1");
    name.textContent = this.model.name;
    container.appendChild(name);

    if (this.model.title) {
      const title = document.createElement("p");
      title.className = "title";
      title.textContent = this.model.title;
      container.appendChild(title);
    }

    if (this.model.contacts) {
      const contacts = document.createElement("p");
      contacts.className = "contacts";
      const parts: string[] = [];
      if (this.model.contacts.email) parts.push(this.model.contacts.email);
      if (this.model.contacts.phone) parts.push(this.model.contacts.phone);
      if (this.model.contacts.location)
        parts.push(this.model.contacts.location);
      contacts.textContent = parts.join(" • ");
      container.appendChild(contacts);
    }

    return container;
  }
}
