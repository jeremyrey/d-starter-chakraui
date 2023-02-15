import * as Icons from '@chakra-ui/icons'
import React from 'react'
import propsToJson from '../hooks/propsToJson'

const MAPPING = {
  add: Icons.AddIcon,
  arrow_back: Icons.ArrowBackIcon,
  arrow_down: Icons.ArrowDownIcon,
  arrow_forward: Icons.ArrowForwardIcon,
  arrow_left: Icons.ArrowLeftIcon,
  arrow_right: Icons.ArrowRightIcon,
  arrow_up: Icons.ArrowUpIcon,
  arrow_down: Icons.ArrowDownIcon,
  arrow_up_down: Icons.ArrowUpDownIcon,
  at_sign: Icons.AtSignIcon,
  attachment: Icons.AttachmentIcon,
  bell: Icons.BellIcon,
  calendar: Icons.CalendarIcon,
  chat: Icons.ChatIcon,
  check: Icons.CheckIcon,
  check_circle: Icons.CheckCircleIcon,
  chevron_down: Icons.ChevronDownIcon,
  chevron_left: Icons.ChevronLeftIcon,
  chevron_right: Icons.ChevronRightIcon,
  chevron_up: Icons.ChevronUpIcon,
  close: Icons.CloseIcon,
  copy: Icons.CopyIcon,
  delete: Icons.DeleteIcon,
  download: Icons.DownloadIcon,
  drag_handle: Icons.DragHandleIcon,
  edit: Icons.EditIcon,
  email: Icons.EmailIcon,
  external_link: Icons.ExternalLinkIcon,
  hamburger: Icons.HamburgerIcon,
  info: Icons.InfoIcon,
  info_outline: Icons.InfoOutlineIcon,
  link: Icons.LinkIcon,
  lock: Icons.LockIcon,
  minus: Icons.MinusIcon,
  moon: Icons.MoonIcon,
  not_allowed: Icons.NotAllowedIcon,
  phone: Icons.PhoneIcon,
  plus_square: Icons.PlusSquareIcon,
  question: Icons.QuestionIcon,
  question_outline: Icons.QuestionOutlineIcon,
  repeat: Icons.RepeatIcon,
  repeat_clock: Icons.RepeatClockIcon,
  search: Icons.SearchIcon,
  settings: Icons.SettingsIcon,
  spinner: Icons.SpinnerIcon,
  star: Icons.StarIcon,
  sun: Icons.SunIcon,
  time: Icons.TimeIcon,
  unlock: Icons.UnlockIcon,
  up_down: Icons.UpDownIcon,
  view: Icons.ViewIcon,
  view_off: Icons.ViewOffIcon,
  warning: Icons.WarningIcon,
}

const Icon = ({ blok }) => {
  let jsonParams = propsToJson(blok.props)

  return React.createElement(MAPPING[blok.name], { ...jsonParams })
}

export default Icon
