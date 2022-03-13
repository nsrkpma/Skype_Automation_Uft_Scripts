Executefile "C:\Users\Nirmal Rawat\Desktop\Sprint2\Locators\Constants.txt"

'Calling Open_Skype function from function library Skypefunctions.qfl
Open_Skype

RunAction "Login", oneIteration
RunAction "CustomizeSettings", oneIteration
RunAction "UpdateProfile", oneIteration
RunAction "Send_Message", oneIteration
RunAction "ShareFile_Contact", oneIteration
RunAction "Send_Voice_Message", oneIteration
RunAction "Schedule_call", oneIteration
RunAction "Video_Call", oneIteration
RunAction "New_Group_Chat", oneIteration
RunAction "Host_Meeting", oneIteration
RunAction "Check_Notification", oneIteration
RunAction "Logout", oneIteration

'Calling Close_Browser function from function library Skypefunctions.qfl
Close_Browser
