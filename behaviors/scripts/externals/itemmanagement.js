export function clearEntity(entity, item, data = -1, amount = function() {
    let num = 0
    for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
        try {
            if (entity.getComponent('inventory').container.getItem(x).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                num += entity.getComponent('inventory').container.getItem(x).amount
            }
        }
        catch (e) {}
    }
    return num
}) {
    if (item == undefined) {
        for (let i = 0; i < entity.getComponent('inventory').inventorySize; i++) {
            entity.runCommand(`replaceitem entity @s slot.inventory `+i+` air 1 0`)
        }
    }
    else {
        let invAmount = 0
        for (let i = 0; i < entity.getComponent('inventory').inventorySize; i++) {
            try {
                if (entity.getComponent('inventory').container.getItem(i).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(i).data == data)) {
                    invAmount += entity.getComponent('inventory').container.getItem(i).amount
                }
            }
            catch (e) {}
        }
        if (invAmount == amount) {
            for (let i = 0; i < entity.getComponent('inventory').inventorySize; i++) {
                try {
                    if (entity.getComponent('inventory').container.getItem(i).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(i).data == data)) {
                        entity.runCommand(`replaceitem entity @s slot.inventory `+i+` air 1 0`)
                    }
                }
                catch (e) {}
            }
        }
        if (invAmount > amount) {
            let reducAmount = 0
            for (let i = 0; i < entity.getComponent('inventory').inventorySize; i++) {
                try {
                    for (let j = 0; j < amount; j++) {
                        if (entity.getComponent('inventory').container.getItem(i).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(i).data == data)) {
                            if (reducAmount >= amount) {
                                break
                            }
                            if (entity.getComponent('inventory').container.getItem(i).amount > 1) {
                                entity.runCommand(`replaceitem entity @s slot.inventory `+i+` `+entity.getComponent('inventory').container.getItem(i).id+` `+(entity.getComponent('inventory').container.getItem(i).amount-1).toString()+` `+entity.getComponent('inventory').container.getItem(i).data)
                            }
                            else {
                                entity.runCommand(`replaceitem entity @s slot.inventory `+i+` air 1 0`)
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

export function testForItem(entity, item, data = -1, operator = '==', amount = function() {
    let num = 0
    for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
        try {
            if (entity.getComponent('inventory').container.getItem(x).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                num += entity.getComponent('inventory').container.getItem(x).amount
            }
        }
        catch (e) {}
    }
    if (num > 0) {
        return num
    }
}) {
    if (operator == '==') { //equal to amount
        try {
            if (entity.runCommand(`testfor @s[hasitem={item=`+item+`, data=`+data+`, quantity=`+(typeof amount == 'function' ? amount() : amount)+`}]`)) {
                return true
            }
        }
        catch (e) {
            return false
        }
    }
    if (operator == '>') { //greater than amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num > amount) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '>=') { //greater than or equal to amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num >= amount) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '<') { //less than amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num < amount) {
            return true
        }
        else {
            return false
        }
    }
    if (operator == '<=') { //less than or equal to amount
        let num = 0
        for (let x = 0; x < entity.getComponent('inventory').inventorySize; x++) {
            try {
                if (entity.getComponent('inventory').container.getItem(x).id == item && (data == -1 ? true : entity.getComponent('inventory').container.getItem(x).data == data)) {
                    num += entity.getComponent('inventory').container.getItem(x).amount
                }
            }
            catch (e) {}
        }
        if (num <= amount) {
            return true
        }
        else {
            return false
        }
    }
}