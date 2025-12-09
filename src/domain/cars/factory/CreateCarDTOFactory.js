import CreateCarDTO from "../dto/CreateCarDTO.js";

export default class CreateCarDTOFactory {
    static empty() {
        return new CreateCarDTO({
            carBrandId: null,
            carModelId: null,
            mileage: null
        });
    }

    static bmwX5(mileage = 0) {
        return new CreateCarDTO({
            carBrandId: 2,
            carModelId: 8,
            mileage
        })
    }

    static audiA8(mileage = 0) {
        return new CreateCarDTO({
            carBrandId: 1,
            carModelId: 5,
            mileage
        })
    }
}