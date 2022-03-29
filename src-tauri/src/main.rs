#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[tauri::command]
fn hello_world() -> String {
    return "hello world".to_string();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![hello_world])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
