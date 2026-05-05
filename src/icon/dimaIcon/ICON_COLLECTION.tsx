import type { IIconProps, TIconName } from "../type"
import { ArrowLeft } from '../ArrowLeft'
import { ActivitySquare } from '../ActivitySquare'
import { AddressBook } from '../AddressBook'
import { AngleBotton } from '../AngleBotton'
import { AngleDown } from '../AngleDown'
import { AngleDownSmall } from '../AngleDownSmall'
import { AngleLeftSmall } from '../AngleLeftSmall'
import { AngleRight } from '../AngleRight'
import { AnglesDown } from '../AnglesDown'
import { AnglesDownSmall } from '../AnglesDownSmall'
import { ArrowDownSmall } from '../ArrowDownSmall'
import { ArrowDownFromLine } from '../ArrowDownFromLine'
import { ArrowUpFromLine } from '../ArrowUpFromLine'
import { ArrowUpSmall } from '../ArrowUpSmall'
import { Bank } from '../Bank'
import { Bell } from '../Bell'
import { Bolt } from '../Bolt'
import { BookmarkFill } from '../BookmarkFill'
import { BookmarkStar } from '../BookmarkStar'
import { Briefcase } from '../Briefcase'
import { BriefcaseCheck } from '../BriefcaseCheck'
import { BriefcaseMoney } from '../BriefcaseMoney'
import { BriefcasePlus } from '../BriefcasePlus'
import { BuildingsAlt } from '../BuildingsAlt'
import { Calendar } from '../Calendar'
import { CalendarCheckAlt } from '../CalendarCheckAlt'
import { Camera } from '../Camera'
import { ChatDots } from '../ChatDots'
import { ChatText } from '../ChatText'
import { Check } from '../Check'
import { Checkbox } from '../Checkbox'
import { CheckCircle } from '../CheckCircle'
import { CheckCircle2 } from '../CheckCircle2'
import { CheckDouble } from '../CheckDouble'
import { CheckSquare } from '../CheckSquare'
import { AngleDownThick } from '../AngleDownThick'
import { ClipboardPlus } from '../ClipboardPlus'
import { Coins } from '../Coins'
import { CommentLock } from '../CommentLock'
import { Copy } from '../Copy'
import { CopyAlt } from '../CopyAlt'
import { CreditCard } from '../CreditCard'
import { CreditCardCheck } from '../CreditCardCheck'
import { CreditCardConvert } from '../CreditCardConvert'
import { CreditCardEdit } from '../CreditCardEdit'
import { CreditCardPlus } from '../CreditCardPlus'
import { CreditCardSlash } from '../CreditCardSlash'
import { Cross } from '../Cross'
import { Document } from '../Document'
import { DocumentList } from '../DocumentList'
import { Edit } from '../Edit'
import { Exchange } from '../Exchange'
import { ExchangeHorizontal } from '../ExchangeHorizontal'
import { ExclamationCircle } from '../ExclamationCircle'
import { Eye } from '../Eye'
import { EyeSlash } from '../EyeSlash'
import { FaildIcon } from '../FaildIcon'
import { FilePdf } from '../FilePdf'
import { FilterPlus } from '../FilterPlus'
import { FingerPrint } from '../FingerPrint'
import { Gallery } from '../Gallery'
import { Gift } from '../Gift'
import { Globe } from '../Globe'
import { HeadPhones } from '../HeadPhones'
import { Home } from '../Home'
import { IconRotateRight90 } from '../IconRotateRight90'
import { IdCard } from '../IdCard'
import { ImageGallery } from '../ImageGallery'
import { Invoice } from '../Invoice'
import { Key } from '../Key'
import { KeyCircle } from '../KeyCircle'
import { LayerGroup } from '../LayerGroup'
import { Line } from '../Line'
import { LocationPin } from '../LocationPin'
import { LogOut } from '../LogOut'
import { Message } from '../Message'
import { MessageText } from '../MessageText'
import { Messagestext2 } from '../Messagestext2'
import { Mobile } from '../Mobile'
import { MoneyBill } from '../MoneyBill'
import { MoneyBillBan } from '../MoneyBillBan'
import { MoneyBillCheck } from '../MoneyBillCheck'
import { MoneyBillConvert } from '../MoneyBillConvert'
import { MoneyBillReceive } from '../MoneyBillReceive'
import { MoneyBills } from '../MoneyBills'
import { MoneyBillSearch } from '../MoneyBillSearch'
import { MoneyBillSend } from '../MoneyBillSend'
import { MoneyBillTimes } from '../MoneyBillTimes'
import { MoneyWithdrawal } from '../MoneyWithdrawal'
import { Moon } from '../Moon'
import { MoreHorizontal } from '../MoreHorizontal'
import { MoreVertical } from '../MoreVertical'
import { MyLoan } from '../MyLoan'
import { Nut } from '../Nut'
import { Pen } from '../Pen'
import { PenLine } from '../PenLine'
import { PhoneOffice } from '../PhoneOffice'
import { Pin } from '../Pin'
import { PinLight } from '../PinLight'
import { Plus } from '../Plus'
import { PlusCircle } from '../PlusCircle'
import { Post } from '../Post'
import { QuestionCircle } from '../QuestionCircle'
import { RadioButton } from '../RadioButton'
import { RecepieSearch } from '../RecepieSearch'
import { Rial } from '../Rial'
import { Rial2 } from '../Rial2'
import { Rotate } from '../Rotate'
import { RotateRight } from '../RotateRight'
import { ScanQr } from '../ScanQr'
import { Search } from '../Search'
import { SearchText } from '../SearchText'
import { Share } from '../Share'
import { ShieldCheck } from '../ShieldCheck'
import { ShieldQuestion } from '../ShieldQuestion'
import { SimCard } from '../SimCard'
import { SlidersHorizontal } from '../SlidersHorizontal'
import { SlidersHorizontalAlt } from '../SlidersHorizontalAlt'
import { Star } from '../Star'
import { Sun } from '../Sun'
import { Trash } from '../Trash'
import { TriangleExclamation } from '../TriangleExclamation'
import { Truck } from '../Truck'
import { Unlock } from '../Unlock'
import { User } from '../User'
import { User2 } from '../User2'
import { UserChange } from '../UserChange'
import { UserCircle } from '../UserCircle'
import { UserOutline } from '../UserOutline'
import { UserPlus } from '../UserPlus'
import { UserSearch } from '../UserSearch'
import { UserSquare } from '../UserSquare'
import { Vector } from '../Vector'
import { Video } from '../Video'
import { Voicemail } from '../Voicemail'
import { Scale } from '../Scale'
import { DocumentListSmall } from '../DocumentListSmall'

export const ICON_COLLECTION: Record<TIconName, React.FC<IIconProps>> = {
  ActivitySquare: ActivitySquare,
  AddressBook: AddressBook,
  AngleBotton: AngleBotton,
  AngleDown: AngleDown,
  AngleDownSmall: AngleDownSmall,
  AngleDownThick: AngleDownThick,
  AngleLeftSmall: AngleLeftSmall,
  AngleRight: AngleRight,
  AnglesDown: AnglesDown,
  AnglesDownSmall: AnglesDownSmall,
  ArrowDownFromLine: ArrowDownFromLine,
  ArrowDownSmall: ArrowDownSmall,
  ArrowLeft: ArrowLeft,
  ArrowUpFromLine: ArrowUpFromLine,
  ArrowUpSmall: ArrowUpSmall,
  Bank: Bank,
  Bell: Bell,
  Bolt: Bolt,
  BookmarkFill: BookmarkFill,
  BookmarkStar: BookmarkStar,
  Briefcase: Briefcase,
  BriefcaseCheck: BriefcaseCheck,
  BriefcaseMoney: BriefcaseMoney,
  BriefcasePlus: BriefcasePlus,
  BuildingsAlt: BuildingsAlt,
  Calendar: Calendar,
  CalendarCheckAlt: CalendarCheckAlt,
  Camera: Camera,
  ChatDots: ChatDots,
  ChatText: ChatText,
  Check: Check,
  Checkbox: Checkbox,
  CheckCircle: CheckCircle,
  CheckCircle2: CheckCircle2,
  CheckDouble: CheckDouble,
  CheckSquare: CheckSquare,
  ClipboardPlus: ClipboardPlus,
  Coins: Coins,
  CommentLock: CommentLock,
  Copy: Copy,
  CopyAlt: CopyAlt,
  CreditCard: CreditCard,
  CreditCardCheck: CreditCardCheck,
  CreditCardConvert: CreditCardConvert,
  CreditCardEdit: CreditCardEdit,
  CreditCardPlus: CreditCardPlus,
  CreditCardSlash: CreditCardSlash,
  Cross: Cross,
  Document: Document,
  DocumentList: DocumentList,
  DocumentListSmall: DocumentListSmall,
  Edit: Edit,
  Exchange: Exchange,
  ExchangeHorizontal: ExchangeHorizontal,
  ExclamationCircle: ExclamationCircle,
  Eye: Eye,
  EyeSlash: EyeSlash,
  FaildIcon: FaildIcon,
  FilePdf: FilePdf,
  FilterPlus: FilterPlus,
  FingerPrint: FingerPrint,
  Gallery: Gallery,
  Gift: Gift,
  Globe: Globe,
  HeadPhones: HeadPhones,
  Home: Home,
  IconRotateRight90: IconRotateRight90,
  IdCard: IdCard,
  ImageGallery: ImageGallery,
  Invoice: Invoice,
  Key: Key,
  KeyCircle: KeyCircle,
  LayerGroup: LayerGroup,
  Line: Line,
  LocationPin: LocationPin,
  LogOut: LogOut,
  Message: Message,
  MessageText: MessageText,
  Messagestext2: Messagestext2,
  Mobile: Mobile,
  MoneyBill: MoneyBill,
  MoneyBillBan: MoneyBillBan,
  MoneyBillCheck: MoneyBillCheck,
  MoneyBillConvert: MoneyBillConvert,
  MoneyBillReceive: MoneyBillReceive,
  MoneyBills: MoneyBills,
  MoneyBillSearch: MoneyBillSearch,
  MoneyBillSend: MoneyBillSend,
  MoneyBillTimes: MoneyBillTimes,
  MoneyWithdrawal: MoneyWithdrawal,
  Moon: Moon,
  MoreHorizontal: MoreHorizontal,
  MoreVertical: MoreVertical,
  MyLoan: MyLoan,
  Nut: Nut,
  Pen: Pen,
  PenLine: PenLine,
  PhoneOffice: PhoneOffice,
  Pin: Pin,
  PinLight: PinLight,
  Plus: Plus,
  PlusCircle: PlusCircle,
  Post: Post,
  QuestionCircle: QuestionCircle,
  RadioButton: RadioButton,
  RecepieSearch: RecepieSearch,
  Rial: Rial,
  Rial2: Rial2,
  Rotate: Rotate,
  RotateRight: RotateRight,
  Scale: Scale,
  ScanQr: ScanQr,
  Search: Search,
  SearchText: SearchText,
  Share: Share,
  ShieldCheck: ShieldCheck,
  ShieldQuestion: ShieldQuestion,
  SimCard: SimCard,
  SlidersHorizontal: SlidersHorizontal,
  SlidersHorizontalAlt: SlidersHorizontalAlt,
  Star: Star,
  Sun: Sun,
  Trash: Trash,
  TriangleExclamation: TriangleExclamation,
  Truck: Truck,
  Unlock: Unlock,
  User: User,
  User2: User2,
  UserChange: UserChange,
  UserCircle: UserCircle,
  UserOutline: UserOutline,
  UserPlus: UserPlus,
  UserSearch: UserSearch,
  UserSquare: UserSquare,
  Vector: Vector,
  Video: Video,
  Voicemail: Voicemail
}