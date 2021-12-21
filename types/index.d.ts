interface UserType{
    firstName : string,
    lastName: string,
    age : string,
    userName: string,
    email : string,
    phone : string,
    picture : string,
}

interface TimerType{
	year?: string,
    month?: string,
    day?: string,
    weekday?: string,
    hour?: string,
    minute?: string,
    timeZoneName?: string
}

declare function renderTemplate(this: Window, ...args: any): string