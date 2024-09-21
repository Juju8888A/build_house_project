function House(name, adress, city){
    this.name = name,
    this.adress = adress,
    this.city = city

    this.getNameInformation = () => {
        return {
            name : this.name,
            adress : this.adress,
            city : this.city
        }    
    }
            console.log(`The house named ${this.name} is located at${this.adress} in ${this.city}`)
            
}

export { House };
