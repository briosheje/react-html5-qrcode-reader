export interface AvailableDevice {
    id: string;
    label: string;
}
declare function useAvailableDevices(scriptUrl: string): {
    devices: AvailableDevice[] | undefined;
    error: any;
};
export default useAvailableDevices;
