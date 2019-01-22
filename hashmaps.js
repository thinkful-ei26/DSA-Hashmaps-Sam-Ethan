'use strict';

class HashMap {
  constructor(initCapacity=20) {
    this.length = 0;
    this._slots = [];
    this._capacity = initCapacity;
    this._deleted = 0;
  }

  //get
  get(key) {
    const index = this._findSlot(key);
    if(this._slots[index] == undefined){
      throw new Error('Key error');
    }
    return this._slots[index].value;
  }

  //set
  set(key, value){
    const loadRatio = (this.length + this._deleted + 1)/ this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    const index = this._findSlot(key);
    this._slots[index] = {
      key,
      value,
      deleted: false,
    };
    this.length++;

  }


  //remove
  remove(key) {
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined){
      throw new Error('Key Error');
    }
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }

  //_find
  _findSlot(key){
    const hash = HashMap._hash(key);
    const start = hash % this._capacity;
    for (let i = start; i < start + this._capacity; i++){
      const index = i % this._capacity;
      const slot = this._slots[index];
      if (slot === undefined || (slot.key == key && !slot.deleted)) {
        return index;
      }
    }
  }

  //_resize
  _resize(size) {
    const oldSlots = this._slots;
    this._capacity = size;
    this.length = 0;
    this._deleted = 0;
    this._slots = [];

    for (const slot of oldSlots) {
      if(slot !== undefined && !slot.deleted){
        this.set(slot.key, slot.value);
      }
    }
  }

  //_hash
  static _hash(string) {
    let hash = 5381;
    for (let i=0; i<string.length; i++) {
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;

  }
}

HashMap.MAX_LOAD_RATIO = 0.7;

HashMap.SIZE_RATIO = 3;
