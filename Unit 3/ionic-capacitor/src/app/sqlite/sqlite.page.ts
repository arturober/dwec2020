import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NgForm } from '@angular/forms';
const { CapacitorSQLite } = Plugins;
// import { Capacitor } from '@capacitor/core';
// import { CapacitorSQLite, SQLiteDBConnection, SQLiteConnection, capSQLiteSet,
//          capSQLiteChanges, capEchoResult, capSQLiteResult} from '@capacitor-community/sqlite';

@Component({
  selector: 'app-sqlite',
  templateUrl: './sqlite.page.html',
  styleUrls: ['./sqlite.page.scss'],
})
export class SqlitePage implements OnInit, OnDestroy {
  @ViewChild('personForm') personForm: NgForm;
  open = false;
  persons: { id?: number, name: string, age: number }[] = [];
  person: { id?: number, name: string, age: number } = {
    name: '',
    age: null
  };

  constructor() { }

  async ngOnInit() {
    const opened = await CapacitorSQLite.open({database: 'testsqlite'});
    if (!opened.result) { return; }

    this.open = true;
    await CapacitorSQLite.run({statement: `CREATE TABLE IF NOT EXISTS person (
      id integer primary key,
      name text not null,
      age integer not null)`});

    const result = await CapacitorSQLite.query({statement: 'SELECT * FROM person'});
    this.persons = result.values;
  }

  async ngOnDestroy() {
    if (this.open) {
      await CapacitorSQLite.close({database: 'testsqlite'});
    }
  }

  async add() {
    if (!this.open) { return; }

    const addRes = await CapacitorSQLite.run({
      statement: 'INSERT INTO person (name, age) VALUES (?,?)',
      values: [this.person.name, this.person.age]
    });

    const idRes = await CapacitorSQLite.query({statement: 'SELECT last_insert_rowid()'});

    this.person.id = +Object.values(idRes.values[0])[0];
    this.persons.push(this.person);
    this.person = { name: '', age: null };
    this.personForm.resetForm();
  }

  async remove(person, index: number) {
    if (!this.open) { return; }

    const delRes = await CapacitorSQLite.run({
      statement: 'DELETE FROM person WHERE id = ?',
      values: [person.id]
    });

    if (delRes.changes > 0) {
      this.persons.splice(index, 1);
    }
  }
}
