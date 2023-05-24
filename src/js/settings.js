export default class Settings {
    static themes = ['light', 'gray'];

    static musics = ['pop', 'rock', 'chillout', 'off'];

    static difficulties = ['normal', 'hard', 'nightmare'];

    static defaultSettings = new Map([['theme', 'light'], ['music', 'pop'], ['difficulty', 'normal']]);

    constructor() {
      this.userSettins = new Map();
    }

    get theme() {
      if (Array.from(this.userSettins.keys()).includes('theme')) {
        return this.userSettins.get('theme');
      }
      return Settings.defaultSettings.get('theme');
    }

    get music() {
      if (Array.from(this.userSettins.keys()).includes('music')) {
        return this.userSettins.get('music');
      }
      return Settings.defaultSettings.get('music');
    }

    get difficulty() {
      if (Array.from(this.userSettins.keys()).includes('difficulty')) {
        return this.userSettins.get('difficulty');
      }
      return Settings.defaultSettings.get('difficulty');
    }

    set theme(theme) {
      if (Settings.themes.includes(theme)) {
        this.userSettins.set('theme', theme);
        return true;
      }
      throw new Error('theme not found');
    }

    set music(music) {
      if (Settings.musics.includes(music)) {
        this.userSettins.set('music', music);
        return true;
      } throw new Error('music not found');
    }

    set difficulty(difficulty) {
      if (Settings.difficulties.includes(difficulty)) {
        this.userSettins.set('difficulty', difficulty);
        return true;
      } throw new Error('difficulty not found');
    }
}
