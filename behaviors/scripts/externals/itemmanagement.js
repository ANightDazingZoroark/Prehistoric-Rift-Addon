export function clearEntity() {
    //define values
    let entity = arguments[0]
    let item = arguments[1]
    let data //= arguments[2]
    let num //= arguments[3]
    if (arguments.length <= 2) {
        data = 0
    }
    else {
        data = arguments[2]
    }
    if (arguments.length > 1 && arguments.length < 4) {
        num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
    }
    else {
        num = arguments[3]
    }

    //clear stuff
    if (arguments.length < 2) {
        for (let i = entity.getComponent('inventory').inventorySize; i > 0; i--) {
            entity.runCommandAsync(`replaceitem entity @s slot.inventory `+i+` air 1 0`)
        }
    }
    else {
        let invAmount = 0
        for (let i = entity.getComponent('inventory').inventorySize; i > 0; i--) {
            try {
                if (entity.getComponent('inventory').container.getItem(i).typeId == item) {
                    invAmount += entity.getComponent('inventory').container.getItem(i).amount
                }
            }
            catch (e) {}
        }
        if (invAmount == num) {
            for (let i = entity.getComponent('inventory').inventorySize; i > 0; i--) {
                try {
                    if (entity.getComponent('inventory').container.getItem(i).typeId == item) {
                        entity.runCommandAsync(`replaceitem entity @s slot.inventory `+i+` air 1 0`)
                    }
                }
                catch (e) {}
            }
        }
        if (invAmount > num) {
            let reducAmount = 0
            for (let i = entity.getComponent('inventory').inventorySize; i > 0; i--) {
                try {
                    for (let j = 0; j < num; j++) {
                        if (entity.getComponent('inventory').container.getItem(i).typeId == item) {
                            if (reducAmount >= num) {
                                break
                            }
                            if (entity.getComponent('inventory').container.getItem(i).amount > 1) {
                                entity.runCommandAsync('replaceitem entity @s slot.inventory '+i+' '+entity.getComponent('inventory').container.getItem(i).typeId+' '+(entity.getComponent('inventory').container.getItem(i).amount-1).toString()+' '+data)
                            }
                            else {
                                entity.runCommandAsync('replaceitem entity @s slot.inventory '+i+' air 1 0')
                            }
                            reducAmount += 1
                        }
                    }
                }
                catch (e) {
                    continue
                }
            }
        }
    }
}

export function testForItem() {
    //define values
    let entity = arguments[0]
    let item = arguments[1]
    let data //= arguments[2]
    let operator //= arguments[3]
    let num //= arguments[4]
    if (arguments.length <= 2) {
        data = -1
        operator = '=='
    }
    else if (arguments.length <= 3) {
        data = arguments[2]
        operator = '=='
    }
    else if (arguments.length >= 4) {
        data = arguments[2]
        operator = arguments[3]
    }

    if (arguments.length <= 4) {
        num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
    }
    else {
        num = arguments[4]
    }

    //test for stuff
    if (operator == '==') { //equal to amount
        let currentAmnt = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    currentAmnt += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (currentAmnt == num) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '>') { //greater than amount
        let currentAmnt = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    currentAmnt += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (currentAmnt > num) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '>=') { //greater than or equal to amount
        let currentAmnt = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    currentAmnt += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (currentAmnt >= num) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '<') { //less than amount
        let currentAmnt = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    currentAmnt += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (currentAmnt < num) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '<=') { //less than or equal to amount
        let currentAmnt = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).typeId == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    currentAmnt += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (currentAmnt <= num) {
            return true
        }
        else {
            return false
        }
    }
}