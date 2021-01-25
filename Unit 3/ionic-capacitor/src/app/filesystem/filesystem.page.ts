import { Component, OnInit } from "@angular/core";
import { FilesystemDirectory, Plugins, FilesystemEncoding } from '@capacitor/core';
const { Filesystem } = Plugins;

@Component({
  selector: "app-filesystem",
  templateUrl: "./filesystem.page.html",
  styleUrls: ["./filesystem.page.scss"]
})
export class FilesystemPage implements OnInit {
  files: string[] = [];
  error = '';
  constructor() {}

  async ngOnInit() {
    try {
      if(!(await this.dirExists())) {
        this.createDir();
      }

      await this.createFile();
      this.files = await this.listFiles();
    } catch (e) {
      this.error = 'Filesystem error: ' + e;
    }
  }

  async dirExists(): Promise<boolean> {
    try {
      let ret = await Filesystem.stat({
        path: 'secrets',
        directory: FilesystemDirectory.Documents
      });
      return ret.type === 'directory';
    } catch(e) {
      return false;
    }
  }

  async createDir(): Promise<void> {
    await Filesystem.mkdir({
      path: 'secrets',
      directory: FilesystemDirectory.Documents,
      recursive: false // like mkdir -p
    });
  }

  async createFile(): Promise<void> {
    await Filesystem.writeFile({
      path: 'secrets/text.txt',
      data: 'This is a test',
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    });
  }

  async listFiles(): Promise<string[]> {
    const result = await Filesystem.readdir({
      path: 'secrets',
      directory: FilesystemDirectory.Documents,
    });
    return result.files;
  }
}
