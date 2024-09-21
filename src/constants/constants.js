import FictionIcon from '../assets/icons/Fiction.svg'
import DramaIcon from '../assets/icons/Drama.svg'
import HumourIcon from '../assets/icons/Humour.svg'
import PoliIcon from '../assets/icons/Politics.svg'
import PhilosophyIcon from '../assets/icons/Philosophy.svg'
import HistoryIcon from '../assets/icons/History.svg'
import AdventureIcon from '../assets/icons/Adventure.svg'

export const GENRES = [
    { value: 'FICTION', label: 'Fiction', icon: FictionIcon },
    { value: 'DRAMA', label: 'Drama', icon: DramaIcon },
    { value: 'HUMOR', label: 'Humor', icon: HumourIcon },
    { value: 'POLITICS', label: 'Politics', icon: PoliIcon },
    { value: 'PHILOSOPHY', label: 'Philosophy', icon: PhilosophyIcon },
    { value: 'HISTORY', label: 'History', icon: HistoryIcon },
    { value: 'ADVENTURE', label: 'Adventure', icon: AdventureIcon },
  ]


  export const baseURL = `http://skunkworks.ignitesol.com:8000/`;