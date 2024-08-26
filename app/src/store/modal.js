import { makeAutoObservable } from "mobx"; //1. делает класс отслеживаемым 2. автоматически все настраивает, принимая контекст класса

class StateUserData {
    step1 = {
        phone: '',
        email: '',
        password: '',
    }

    step2 = {
        user: '',
        phone: '',
        email: '',
        sex: '',
        dataBirth: '',
        city: '',
        sameAddress: false,
        registration: '',
        owner: '',
        psy: false,
        residentRussia: false,
        citizen: false,
        citizenship: '',
    }
    
    step3 = {
        getService: '',
        sum: '',
        sumMonth: '',
        percent: '',
        building: false,
        auto: false,
        diamonds: false,
        lombard: false,
        creditBroker: false,
        broker: false,
    }

    constructor() {
        makeAutoObservable(this)
    }

    setStep1(key, value) {
        this.step1 = {...this.step1, [key] : value}
    }

    setStep2(key, value) {
        this.step2 = {...this.step2, [key] : value}
    }

    getStep2(){
        return this.step2
    }

    getStep3(){
        return this.step3
    }
    
}

const stateUserData = new StateUserData()

export default stateUserData