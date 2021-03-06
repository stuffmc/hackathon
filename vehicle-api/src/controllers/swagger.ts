/**
 * This file is part of the vehicle-api distribution (https://github.com/egodigital/hackathon/vehicle-api).
 * Copyright (c) e.GO Digital GmbH, Aachen, Germany
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import * as egoose from '@egodigital/egoose';
import * as fsExtra from 'fs-extra';
import { ControllerBase } from '@egodigital/express-controllers';

// Issue: TypeScript seems to remove some comments: https://github.com/Microsoft/TypeScript/issues/16727
{
    /**
     * @swaggerDefinition
     *
     * OnOffStatus:
     *   type: string
     *   enum:
     *     - 'off'
     *     - 'on'
     */

    /**
     * @swaggerDefinition
     *
     * OpenStatus:
     *   type: string
     *   enum:
     *     - 'closed'
     *     - 'open'
     */

    /**
     * @swaggerDefinition
     *
     * YesOrNo:
     *   type: string
     *   enum:
     *     - 'no'
     *     - 'yes'
     */

    /**
     * @swaggerDefinition
     *
     * Vehicle:
     *   type: object
     *   required:
     *     - id
     *   properties:
     *     id:
     *       type: string
     *       description: The UUID of the vehicle.
     *       example: '05091979-2309-1979-0509-197923091979'
     *     last_update:
     *       type: string
     *       description: The time the vehicle has been updated.
     *       example: '1979-09-23T05:09:19.790Z'
     *     name:
     *       type: string
     *       description: The display name.
     *       example: 'My e.GO Life'
     *     state:
     *       description: A state value.
     *     team:
     *       type: string
     *       description: The name of the team.
     *       example: 'Team e.GO Digital'
     */

    /**
     * @swaggerDefinition
     *
     * VehicleEvent:
     *   type: object
     *   properties:
     *     creation_time:
     *       type: string
     *       description: The time the dataset has been created.
     *       example: '1979-09-05T23:09:19.790Z'
     *     id:
     *       type: string
     *       description: The ID of the entry.
     *       example: '012345678901234567890123'
     *     is_handled:
     *       type: boolean
     *       description: Indicates if event has been handled or not.
     *       example: true
     *     last_update:
     *       type: string
     *       description: The time the dataset has been updated.
     *       example: '1979-09-23T05:09:19.790Z'
     *     name:
     *       type: string
     *       description: The name.
     *       example: 'door_opened'
     *     data:
     *       description: The data.
     *       example: 'front_right'
     */

    /**
     * @swaggerDefinition
     *
     * VehicleSignalList:
     *   type: object
     *   properties:
     *     brake_fluid_level:
     *       type: number
     *       example: 95
     *       default: 100
     *       minimum: 0
     *       maximum: 100
     *     battery_charging:
     *       $ref: '#/definitions/YesOrNo'
     *       example: 'yes'
     *       default: 'no'
     *     battery_charging_current:
     *       type: number
     *       example: 15
     *       default: 16
     *       minimum: 0
     *     battery_health:
     *       type: number
     *       example: 99
     *       default: 100
     *       minimum: 0
     *       maximum: 100
     *     battery_loading_capacity:
     *       type: number
     *       example: 10
     *       default: 11
     *       minimum: 0
     *     battery_state_of_charge:
     *       type: number
     *       example: 99
     *       default: 100
     *       minimum: 0
     *       maximum: 100
     *     calculated_remaining_distance:
     *       type: number
     *       example: 100
     *       default: 150
     *       minimum: 0
     *     central_locking_system:
     *       $ref: '#/definitions/OpenStatus'
     *       example: 'open'
     *       default: 'closed'
     *     distance_to_object_back:
     *       type: number
     *       example: 10
     *       default: 'NaN'
     *       minimum: 0
     *     distance_to_object_bottom:
     *       type: number
     *       example: 20
     *       default: 20
     *       minimum: 0
     *     distance_to_object_front:
     *       type: number
     *       example: 5
     *       default: 'NaN'
     *       minimum: 0
     *     distance_to_object_left:
     *       type: number
     *       example: 5
     *       default: 'NaN'
     *       minimum: 0
     *     distance_to_object_right:
     *       type: number
     *       example: 'NaN'
     *       default: 5
     *       minimum: 0
     *     distance_trip:
     *       type: number
     *       example: 59.79
     *       default: 0
     *       minimum: 0
     *     door_disc_front_left:
     *       $ref: '#/definitions/OpenStatus'
     *       example: 'open'
     *       default: 'closed'
     *     door_disc_front_right:
     *       $ref: '#/definitions/OpenStatus'
     *       example: 'open'
     *       default: 'closed'
     *     door_front_left:
     *       $ref: '#/definitions/OpenStatus'
     *       example: 'open'
     *       default: 'closed'
     *     door_front_right:
     *       $ref: '#/definitions/OpenStatus'
     *       example: 'open'
     *       default: 'closed'
     *     drive_mode:
     *       type: string
     *       example: sport
     *       default: eco
     *       enum:
     *         - 'comfort'
     *         - 'eco'
     *         - 'sport'
     *     flash:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     heated_seats:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     high_beam:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     infotainment:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     infotainment_volume:
     *       type: number
     *       example: 8
     *       default: 5
     *       minimum: 0
     *       maximimum: 0
     *     location:
     *       type: string
     *       example: '50.775620,6.132380'
     *       default: '50.782117,6.047171'
     *     mileage:
     *       type: number
     *       example: 5979
     *       default: 0
     *       minimum: 0
     *     motor_control_lamp:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     person_count:
     *       type: number
     *       example: 3
     *       default: 0
     *       minimum: 0
     *       maximum: 0
     *     pulse_sensor_steering_wheel:
     *       type: number
     *       example: 100
     *       default: 'NaN'
     *       minimum: 0
     *       maximum: 300
     *     power_consumption:
     *       type: number
     *       example: 30
     *       default: 0
     *       minimum: 0
     *       maximum: 40
     *     rain_sensor:
     *       type: string
     *       example: rain
     *       default: no_rain
     *       enum:
     *         - no_rain
     *         - rain
     *     rear_running_lights:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     side_lights:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     speed:
     *       type: number
     *       speed: 59
     *       default: 0
     *     stop_lights:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     temperature_inside:
     *       type: number
     *       example: 15
     *       default: 20
     *       minimum: -100
     *       maximum: 100
     *     temperature_outside:
     *       type: number
     *       example: 25
     *       default: 10
     *       minimum: -100
     *       maximum: 100
     *     tire_pressure_back_left:
     *       type: number
     *       example: 2
     *       default: 3
     *       minimum: 0
     *       maximum: 5
     *     tire_pressure_back_right:
     *       type: number
     *       example: 2
     *       default: 3
     *       minimum: 0
     *       maximum: 5
     *     tire_pressure_front_left:
     *       type: number
     *       example: 2
     *       default: 3
     *       minimum: 0
     *       maximum: 5
     *     tire_pressure_front_right:
     *       type: number
     *       example: 2
     *       default: 3
     *       minimum: 0
     *       maximum: 5
     *     trunk:
     *       $ref: '#/definitions/OpenStatus'
     *       example: 'open'
     *       default: 'closed'
     *     turn_signal_left:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     turn_signal_right:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     warning_blinker:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     weight:
     *       type: number
     *       example: 2000
     *       default: 1200
     *       minimum: 1200
     *       maximum: 3500
     *     windshield_wipers:
     *       $ref: '#/definitions/OnOffStatus'
     *       example: 'on'
     *       default: 'off'
     *     wiping_water_level:
     *       type: number
     *       example: 66.6
     *       default: 100
     *       minimum: 0
     *       maximum: 100
     */

    /**
     * @swaggerDefinition
     *
     * VehicleSignalListForPatchExample:
     *   type: object
     *   properties:
     *     location:
     *       type: string
     *       example: '51,7'
     *     turn_signal_left:
     *       type: string
     *       example: 'on'
     *     turn_signal_right:
     *       type: string
     *       example: 'on'
     */

    /**
     * @swaggerDefinition
     *
     * VehicleSignalLog:
     *   type: object
     *   properties:
     *     creation_time:
     *       type: string
     *       description: The time the dataset has been created.
     *       example: '1979-09-05T23:09:19.790Z'
     *     id:
     *       type: string
     *       description: The ID of the entry.
     *       example: '012345678901234567890123'
     *     name:
     *       type: string
     *       description: The name of the signal.
     *       example: 'location'
     *     old_data:
     *       type: string
     *       description: The old value.
     *       example: '50.782117,6.047171'
     *     new_data:
     *       type: string
     *       description: The new value.
     *       example: '50.775294,6.133131'
     */
}


interface PackageJSON {
    displayName: string;
    version: string;
}


/**
 * /controllers/swagger.ts
 *
 * Base path: '/swagger'
 */
export class Controller extends ControllerBase {
    /** @inheritdoc */
    public __init() {
        const PACKAGE_JSON: PackageJSON = JSON.parse(
            fsExtra.readFileSync(
                __dirname + '/../../package.json',
                'utf8'
            )
        );

        const HOST = egoose.IS_LOCAL_DEV ?
            'localhost' : 'ego-vehicle-api.azurewebsites.net';
        const SCHEMES: any[] = egoose.IS_LOCAL_DEV ?
            ["http"] : ["https"];

        egoose.setupSwaggerUIFromSourceFiles({
            cwd: __dirname,
            document: {
                host: HOST,
                basePath: '/',
                info: {
                    contact: {
                        name: 'e.GO Digital GmbH',
                        email: "hello@e-go-digital.com",
                        url: 'https://github.com/egodigital/hackathon/tree/master/vehicle-api',
                    },
                    description: "Describes all endpoints of the vehicle API.",
                    license: {
                        name: 'GPL 3.0',
                        url: 'https://github.com/egodigital/hackathon/blob/master/vehicle-api/LICENSE',
                    },
                    title: PACKAGE_JSON.displayName,
                    version: PACKAGE_JSON.version,
                },
                schemes: SCHEMES,
                tags: {
                    'v1': 'Version 1',
                },
            },
            title: 'Vehicle API by e.GO',
        }, this.__app);
    }
}
